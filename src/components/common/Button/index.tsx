export default function ({ label = "label" }: { label?: string }) {
  return <div className="bg-mainYellowLight rounded-full p-2 flex justify-center w-[100px] font-subTitleFont content-center">{label}</div>;
}
