import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;
