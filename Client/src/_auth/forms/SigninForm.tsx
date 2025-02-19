import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SigninValidationSchema as SigninValidation } from '@/lib/validation'
import { z } from 'zod'
import Loader from '@/components/shared/loader'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"
import { useLogin } from '@/lib/react-quey/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const SigninForm = () => {

  const { toast } = useToast()

  const { mutateAsync: logInAccount, isPending: isSigningIn } = useLogin()
  const { isAuthenticated, isLoading } = useUserContext();

  const navigate = useNavigate()
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",

    },
  })

  useEffect(() => {
    // Redirect to home if user is already authenticated
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


  async function onSubmit(values: z.infer<typeof SigninValidation>) {

    const session = await logInAccount({
      email: values.email,
      password: values.password
    })

    if (!session) {
      toast({
        title: 'SignIn failed. Please try again',
      });
      return;
    }


    if (isAuthenticated) {
      form.reset()
      navigate('/')
    } else {
      return toast({
        title: "SignIn failed. Please try again"
      });
    }
  }

  return (
    <Form {...form}>
      <div className=" w-full sm:w-420 px-5 sm:px-0  flex-center flex-col">
        <h2 className='text-dark-1 font-bold text-2xl tracking-wide pt-6 sm:pt-2 self-start md:self-start'>Welcome!!</h2>
        <p className='text-light-2 text-sm	mt-0 sm:mt-0 sm:text-md self-start md:self-start	'>Please login here</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>Email</FormLabel>
                <FormControl>
                  <Input type='email' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>Password</FormLabel>
                <FormControl>
                  <Input type='password' className='shad-input ' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={'default'} size={'lg'} >
            {isLoading ? (
              <div className='flex-center gap-2'>
                <Loader /> Loading...
              </div>
            ) : 'signin'}
          </Button>
          <p className="text-sm text-gray-500 text-center mt-2">
            Don't have an account ?  <Link to="/sign-up" className='text-primary ml-1 text-small-semibold	'>Sign up</Link>
          </p>
        </form>
      </div>
    </Form>

  )
}

export default SigninForm
