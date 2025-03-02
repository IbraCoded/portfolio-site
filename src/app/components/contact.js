import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-2 text-primary text-center">
        Get in Touch
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Let&apos;s work together
      </p>
      <div className="max-w-md mx-auto">
        <div className="gradient-border rounded-lg">
          <div className="rounded-lg p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Your Name
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="eg. John"
                    className="bg-card border-border/50 focus:border-primary pl-10"
                  />
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Your Email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="eg. john@example.com"
                    className="bg-card border-border/50 focus:border-primary pl-10"
                  />
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Your Message
                </label>
                <Textarea
                  placeholder="I'd like to talk about..."
                  rows={4}
                  className="bg-card border-border/50 focus:border-primary"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
