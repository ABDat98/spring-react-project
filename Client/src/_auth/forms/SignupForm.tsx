import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidationSchema as SignupValidation } from '@/lib/validation'
import { z } from 'zod'
import Loader from '@/components/shared/loader'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"
import { useRegisterAccount, useLogin } from '@/lib/react-quey/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const SignupForm = () => {
  const { toast } = useToast()

  const { mutateAsync: createUserAcount, isPending: isCreatingUser } = useRegisterAccount()
  const { mutateAsync: singInAccount, isPending: isSigningIn } = useLogin()
  const { isAuthenticated, isLoading } = useUserContext();
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""

    },

  })



  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    try {
      debugger
      const response = await createUserAcount(values);
    
      const session = await singInAccount({
        email: values.email,
        password: values.password
      });

      if (isAuthenticated) {
        form.reset();
        navigate('/');
      } else {
        throw new Error("Sign Up failed. Please try again");
      }
    } catch (error) {
      if (error.status === 409) {
        form.setError("email", {
          type: "server",
          message: error.message || "This email is already in use",
        });
      } else {
        toast({
          title: "An error occurred. Please try again.",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <div className=" w-full px-5 sm:px-0 sm:w-420  flex-center flex-col">
        <h2 className='h3-bold sm:h2-bold pt-6 sm:pt-2 self-start'>Create a new account</h2>
        <p className='text-light-2 text-lg	 sm:text-base self-start	'>Please enter details</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 ">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>First Name</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>Last Name</FormLabel>
                <FormControl>
                  <Input type='text' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                  <Input type='password' className='shad-input' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant={"default"} >
            {isCreatingUser ? (
              <div className='flex-center gap-2'>
                <Loader /> Loading...
              </div>
            ) : 'signup'}
          </Button>
          <p className="text-sm text-light-2 text-center mt-2">
            Already have an account ?  <Link to="/sign-in" className='text-primary  text-small-semibold	'>Log in</Link>
          </p>
        </form>
      </div>
    </Form>

  )
}

export default SignupForm
