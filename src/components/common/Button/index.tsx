export default function ({ label = "label" }: { label?: string }) {
  return <div className="bg-mainYellowLight rounded-full p-2  justify-center inline-flex font-subTitleFont content-center px-4">{label}</div>;
}
