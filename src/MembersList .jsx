
import MemberItem from "./MemberItem";

const MembersList = () => {

  

  const members = [
    { id: 1, name: 'Mayar Qasarwa' },
    { id: 2, name: 'Sun Jun' },
    { id: 3, name: 'Song Bao' },
    { id: 4, name: 'Olivia Arribas' },
    { id: 5, name: 'Bonginkosi Mdladlana' },
    { id: 6, name: 'Arina Belomestnykh' },
    { id: 7, name: 'Jacqueline Likoki' }
  ];

  return (
    <div className="space-y-2 w-full">
      {members.map((member) => (
        <MemberItem
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
};

export default MembersList;
