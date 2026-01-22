import Cabin from "@/app/_components/Cabin";
import DateSelector from "@/app/_components/DateSelector";
import Reservation from "@/app/_components/Reservation";
import ReservationForm from "@/app/_components/ReservationForm";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";
// export const metadata = {
//   title:"Cabin"
// }
export async function generateMetadata({ params }) {
  // Await params first
  const { cabinId } = await params;

  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

async function Page({ params }) {
  // Await params first
  const { cabinId } = await params;
  console.log(cabinId);
  const cabin = await getCabin(cabinId);

  console.log(cabinId);
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
