import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CardDetails = () => {
    return (
        <div>
            <Tabs defaultValue="descriptions" className="w-full">
                <TabsList>
                    <TabsTrigger value="descriptions" >Descriptions </TabsTrigger>
                    <TabsTrigger value="information">Information</TabsTrigger>
                    <TabsTrigger value="reviews"  disabled>Reviews</TabsTrigger>

                </TabsList>
                <TabsContent value="descriptions" className='py-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veniam qui, temporibus officiis et, ipsam ab quaerat hic ducimus, pariatur accusamus molestiae cupiditate labore aspernatur ad repudiandae sequi quae aliquid?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consequuntur aliquid. Delectus quisquam voluptas tempora ratione doloribus. Qui, ipsum porro! Adipisci optio sequi officiis nesciunt recusandae modi veritatis ipsum officia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa impedit illum, tenetur quidem est repellat! Possimus quas numquam adipisci beatae repudiandae? Sint in mollitia consequatur aut facilis distinctio tempora?.</TabsContent>
                <TabsContent value="information" className='py-5 border-b border-gray-300'>
                    <div className=' w-full flex flex-col gap-5 '>
                        <div>
                            <span className='text-lg font-bold'> Color </span>
                            Red , Blue , Orange , Black
                        </div>
                        <div>
                            <span className='text-lg font-bold'> Size </span>
                            S , M , L , Xl
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="reviews">Change your password here.</TabsContent>

            </Tabs>

        </div>
    )
}

export default CardDetails
