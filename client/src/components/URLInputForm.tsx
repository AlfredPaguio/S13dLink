import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

const FormSchema = z.object({
  websiteURL: z.string().url({ message: "Invalid url" }),
});

function URLInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      websiteURL: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
    const { websiteURL } = values;
    try {
      const fetchResponse = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: websiteURL }),
      });
      const data = await fetchResponse.json();
      console.log(data);
    } catch (error) {
      console.error("Error creating shortened URL:", error);
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-2 w-full p-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="websiteURL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.com" {...field} />
              </FormControl>
              <FormDescription>
                This is the original URL that you want to shorten.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Shorten URL
        </Button>
      </form>
    </Form>
  );
}

export default URLInputForm;
