import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { IoMdAdd } from "react-icons/io"
import { Priority } from "./Priority"
import { DatePicker } from "./DatePicker"
import { ToastButton } from "./ToastButton"

export function SheetContainer({type}: any) {
  return (
    <Sheet>
        <SheetTrigger asChild>
            {!type ?
                <p className='w-9 h-9 bg-white rounded-lg text-primary grid place-items-center text-3xl cursor-pointer'><IoMdAdd /></p>
                :
                <Button className='flex items-center gap-2'><IoMdAdd /> Create new Task </Button>
            }
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Create new task</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                </SheetDescription>
            </SheetHeader>
            <form className="grid gap-4 py-4">
                <div className="flex flex-col gap-1">
                    <Label>Task title</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Task description</Label>
                    <Textarea />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Priority</Label>
                    <Priority />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Due date</Label>
                    <DatePicker />
                </div>
            </form>
            <SheetFooter>
                    {/* <Button type="submit">Create task</Button> */}
                    <ToastButton />
                {/* <SheetClose asChild>
                </SheetClose> */}
            </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}
