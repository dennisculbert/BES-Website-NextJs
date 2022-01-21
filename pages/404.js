import { useEffect } from "react";
import { useRouter } from "next/router";

function CustomErrorPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
}

export default CustomErrorPage;
