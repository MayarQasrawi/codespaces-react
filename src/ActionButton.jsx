import Button from "./Buttons"; 

const ActionButton = () => {
  return (
    <div className="flex flex-wrap space-x-3 mt-6">
      <Button 
        text="Cancle"
        primary={false} 
        onClick={() => console.log("Save clicked")} 
      />

      <Button 
        text="SAVE" 
        onClick={() => console.log("Cancel clicked")} 
      />
    </div>
  );
};

export default ActionButton;
