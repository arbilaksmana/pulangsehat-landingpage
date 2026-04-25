import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PulangSehat",
    short_name: "PulangSehat",
    description:
      "Asisten digital pemulihan pasca-rawat inap untuk memantau obat, jadwal kontrol, dan koordinasi keluarga.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7e0b48",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
