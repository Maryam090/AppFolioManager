"use client";
import { useEffect } from "react";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  useEffect(() => {
    import("@justinribeiro/lite-youtube");
  }, []);

  // @ts-ignore
  return <lite-youtube videoid={id} videotitle={title} {...rest} className="rounded-lg overflow-hidden" />;
};

export default Youtube;
