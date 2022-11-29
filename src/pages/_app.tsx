import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

import "../styles/styles.scss";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      { getLayout( <Component {...pageProps} /> ) }
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
