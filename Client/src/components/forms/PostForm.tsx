import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import FileUploader from "../shared/FileUploader"

const formSchema = z.object({
    caption: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    file: z.string().min(8, {
        message: "passwords must be at least 2 characters.",
    }),
    location: z.string().min(8, {
        message: "passwords must be at least 2 characters.",
    }),
    tags: z.string().min(8, {
        message: "passwords must be at least 2 characters.",
    })
})
const PostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            caption: "",
            file:"",
            location:"",
            tags:""
        },
      })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-9 max-w-5xl">
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Caption</FormLabel>
                            <FormControl>
                                <Textarea className="shad-textarea custom-scrollbar" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                        
                    )}
                />
                 <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add Photos</FormLabel>
                            <FormControl>
                                <FileUploader/>
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                        
                    )}
                />
                 <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add location</FormLabel>
                            <FormControl>
                                <Input className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                        
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add Tags (separated by comma ", ")</FormLabel>
                            <FormControl>
                                <Input className="shad-input" {...field} placeholder="Art, Expression, Learn" />
                            </FormControl>
                            <FormMessage className="shad-form_message"/>
                        </FormItem>
                        
                    )}
                />
                <div className="flex gap-4 items-center justify-end">
                <Button type="button" className="shad-button_dark_4">Cancel</Button>

                <Button type="submit" className="shad-button_primary whitespace-nowrap">Submit</Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm
