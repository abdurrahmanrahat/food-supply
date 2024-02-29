import Container from "@/components/ui/Container";
import { useGetSupplyDonationQuery } from "@/redux/features/supplyDonation/supplyDonationApi";

const Leaderboard = () => {
  const { data: suppliesDonations } = useGetSupplyDonationQuery(undefined);
  console.log(suppliesDonations);

  return <Container>Leaderboard</Container>;
};

export default Leaderboard;
