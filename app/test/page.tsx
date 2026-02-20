import { getDataWithoutTag, getDataWithTag } from "./fetch";
import TestClient from "./client";

export default async function TestPage() {
  const dataWithTag = await getDataWithTag();
  const dataWithoutTag = await getDataWithoutTag();

  return (
    <TestClient dataWithTag={dataWithTag} dataWithoutTag={dataWithoutTag} />
  );
}
