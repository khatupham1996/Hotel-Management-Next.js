import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <main className="mt-24 ">
      {/*There is an issue If we don't specify the width and hight when we use Image from next.js*/}
      {/* <Image src="/bg.png" alt="Mountains and forests with two cabins" /> */}
      {/* in order to void this issue we can use this. The fill prop in Next.js Image component makes the image fill its parent container completely, similar to CSS object-fit: cover.*/}
      <Image
        src={bg}
        fill
        // to void the image shift around we will use object-top
        className="object-cover object-top"
        //placeholder = "blur" trong next.js Image component tạo hiệu ứng làm mờ khi ảnh đang tải
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
