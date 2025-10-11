
import ReactIcono from "@/assets/react.svg";
import TypeScriptIcono from "@/assets/typescript.svg";
import TailWindIcono from "@/assets/tailwind.svg";
import GithubIcono from "@/assets/github.svg";
import RustIcono from "@/assets/rust.svg";

export type iconStyle = {
  width?: string,
  height?: string,
};


export function IconReact() {
  return (
    <img src={ReactIcono} alt="React Icon" />
  );
}

export function IconGithub( style?: iconStyle) {
  return (
    <img src={GithubIcono} alt="GitHub Icon" style={style} />
  );
}


export function IconRust() {
  return (
    <img src={RustIcono} alt="Rust Icon" />
  );
}

export function IconTypescript() {
  return (
    <img src={TypeScriptIcono} alt="TypeScript Icon" />
  );
}   

export function IconTailwindcss() {
  return (
    <img src={TailWindIcono} alt="Tailwind CSS Icon" />
  );
} 