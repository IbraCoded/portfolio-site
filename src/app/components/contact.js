"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(JSON.stringify(response));

      if (!response.ok) {
        console.log("Error in the api route");
      }
    } catch {
      console.error("Problem while submitting form");
    }

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // show a success message
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">
                  Your Name
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    placeholder="eg. John"
                    className="bg-card border-border/50 focus:border-primary pl-10"
                    onChange={handleInputChange}
                    value={formData.name} // Bind value to formData.name
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
                    name="email"
                    placeholder="eg. john@example.com"
                    className="bg-card border-border/50 focus:border-primary pl-10"
                    onChange={handleInputChange}
                    value={formData.email} // Bind value to formData.email
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
                  name="message"
                  className="bg-card border-border/50 focus:border-primary"
                  onChange={handleInputChange}
                  value={formData.message} // Bind value to formData.message
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={
                  !formData.name || !formData.email || !formData.message
                }
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
