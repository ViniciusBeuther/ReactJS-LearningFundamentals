import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import MyPhoto from './assets/MyPhoto.jpg'

export default function App(){
  return (
    <>
      <ProfileComponent 
        profileImage={MyPhoto} 
        fullname={"Vinicius Eduardo Beuther"} 
        description={"Front-end Developer | React JS"} 
        phone={"(47) 99122-2358"} 
        email={"vinicius.beuther15@gmail.com"}  
        gitURL={"https://github.com/ViniciusBeuther"} 
        linkedinURL={"https://www.linkedin.com/in/viniciuseduardobeuther/"} instagramURL={"https://instagram.com/"} 
      />
    </>
  )
}