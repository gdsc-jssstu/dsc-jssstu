import { people } from "../../../data/cert2020";

export default function personHandler({ query: { cid } }, res) {
  const filtered = people.filter((p) => p.id === cid);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${cid} not found.` });
  }
}
