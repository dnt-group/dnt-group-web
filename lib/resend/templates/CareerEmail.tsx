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

type CareerEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  positionTitle?: string;
  isGeneral: boolean;
  locale?: string;
};

export function CareerEmail({
  firstName,
  lastName,
  email,
  phone,
  positionTitle,
  isGeneral,
  locale,
}: CareerEmailProps) {
  const applicationType = isGeneral ? "General Application" : `Application for ${positionTitle}`;

  return (
    <Html>
      <Head />
      <Preview>{applicationType} from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{applicationType}</Heading>

          <Section style={section}>
            <Text style={label}>Applicant Name</Text>
            <Text style={value}>{firstName} {lastName}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone || "-"}</Text>
          </Section>

          {!isGeneral && positionTitle && (
            <Section style={section}>
              <Text style={label}>Position Applied For</Text>
              <Text style={value}>{positionTitle}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Locale</Text>
            <Text style={value}>{locale || "-"}</Text>
          </Section>

          <Hr style={hr} />
          <Section style={section}>
            <Text style={noteText}>
              CV/Resume is attached to this email.
            </Text>
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

const noteText = {
  color: "#6b7280",
  fontSize: "14px",
  fontStyle: "italic" as const,
  margin: "0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};
