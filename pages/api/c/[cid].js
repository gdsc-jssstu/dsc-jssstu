import { cert2020 } from "../../../data/cert2020";

export default function personHandler({ query: { cid } }, res) {
  const filtered = cert2020.filter((cert) => cert.id === cid);

  // User with id exists
  if (filtered.length > 0) res.status(200).json(filtered[0]);
  else
    res
      .status(404)
      .json({ message: `User with certificate id: ${cid} not found.` });
}
