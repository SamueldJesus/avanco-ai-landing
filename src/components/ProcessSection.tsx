import { PROCESS_STEPS } from "../data/content";

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="border-b border-[#11161F]/8 bg-white py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-[540px]">
          <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#8C5E14] uppercase">
            <span className="rounded-md border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5">
              04
            </span>
            <span>Processo</span>
          </p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#11161F] sm:text-[42px]">
            No ar em{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              quatro passos.
            </span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <li
              key={item.step}
              className="flex flex-col rounded-[20px] border border-[#11161F]/10 bg-[#F7F5F0] p-6"
            >
              <span className="font-editorial text-[36px] leading-none text-[#8C5E14]">
                {item.step}
              </span>
              <h3 className="mt-4 text-[17px] font-bold leading-snug tracking-[-0.02em] text-[#11161F]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[#495464]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
