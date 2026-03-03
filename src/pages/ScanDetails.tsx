import { useParams } from "react-router-dom";

export default function ScanDetails() {
  const { id } = useParams();
  return <div>ScanDetails id: {id}</div>;
}
