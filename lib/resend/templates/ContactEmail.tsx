import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from "@react-email/components";

type ContactEmailProps = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  locale?: string;
  pageUrl?: string;
};

export function ContactEmail({
  fullName,
  email,
  phone,
  message,
  locale,
  pageUrl,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form message from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Message</Heading>

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{fullName}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone || "-"}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Locale</Text>
            <Text style={value}>{locale || "-"}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Page URL</Text>
            <Text style={value}>{pageUrl || "-"}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  borderRadius: "8px",
};

const heading = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 30px",
};

const section = {
  marginBottom: "16px",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px",
};

const value = {
  color: "#1a1a1a",
  fontSize: "16px",
  margin: "0",
};

const messageText = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};
