"use client";

import { Field, FieldGroup, FieldLabel, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function MessageForm() {
  return (
    <FieldSet className="w-10/12">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input
            id="name"
            autoComplete="off"
            placeholder="Evil Rabbit"
            className="border-foreground/50"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="evil.rabbit@example.com"
            className="border-foreground/50"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            placeholder="Your message here..."
            className="border-foreground/50 h-25"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
