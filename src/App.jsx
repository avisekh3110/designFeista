import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "/assets/logo.svg";
import man from "/assets/man.svg";
import full from "/assets/full.svg";
import mid1 from "/assets/mid1.svg";
import mid2 from "/assets/mid2.svg";
import mid3 from "/assets/mid3.svg";
import model1 from "/assets/model1.svg";
import model2 from "/assets/model2.svg";

function App() {
  return (
    <div className="bg-[#F5F7Fa] h-full ">
      <div className="flex p-8 justify-around items-center ">
        <img className="" src={logo} alt="" />
        <div className=" flex text-lg gap-12 font-normal">
          <div>Home</div>
          <div>Service</div>
          <div>Features</div>
          <div>Product</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <div className="flex gap-3 text-lg">
          <div className="text-[#4CAF4F] py-2 px-5 rounded-md">Login</div>
          <div className="text-white bg-[#4CAF4F] py-2 px-5 rounded-md">
            Sign up
          </div>
        </div>
      </div>
      <div className="bg[#F5F7FA] h-[35rem] flex items-center justify-center">
        <div className="h-full w-1/2  flex flex-col items-start justify-center">
          <div className="text-[#4D4D4D] text-7xl font-semibold">
            Lessons and insights
          </div>
          <div className="text-[#4CAF4F] text-7xl font-semibold">
            from 8 years
          </div>
          <div className="text-[#717171] text-xl my-7">
            Where to grow your business as a photographer: site or social media?
          </div>
          <div className="text-white text-xl py-4 px-9 rounded-lg bg-[#4CAF4F]">
            Register
          </div>
        </div>
        <img src={man} height={400} width={400} alt="" />
      </div>
      <div className="flex items-center justify-center text-8xl text-[#4caf4f58] py-31">
        <div className="text-[#4CAF4F]">.</div>
        <div>.</div>
        <div>.</div>
      </div>
      <div className="h-[15rem] flex flex-col items-center p-10 bg-white">
        <div className="text-4xl font-semibold text-[#4D4D4D]">Our Clients</div>
        <div className="text-base tracking-wider py-3 text-[#4D4D4D]">
          We have been working with some Fortune 500+ clients
        </div>
        <img src={full} alt="" />
      </div>
      <div className="h-[30rem] flex flex-col items-center p-10 bg-white">
        <div className="text-4xl font-semibold text-[#4D4D4D] text-center">
          Manage your entire community
          <br /> in a single system
        </div>
        <div className="text-lg tracking-wider py-3 text-[#4D4D4D]">
          Who is Nextcent suitable for?
        </div>
        <div className="flex justify-around items-center w-full px-12">
          <div className="flex flex-col items-center justify-center text-[#4D4D4D]">
            <img src={mid1} alt="" />
            <div className="text-3xl text-center font-semibold ">
              Membership <br /> Organisations
            </div>
            <div className="text-center text-lg">
              Our membership management <br /> software provides full automation
              of
              <br /> membership renewals and payments
            </div>
          </div>
          <div className="bg-white flex flex-col items-center justify-center text-[#4D4D4D]">
            <img src={mid2} alt="" />
            <div className="text-3xl text-center font-semibold ">
              National <br /> Associations
            </div>
            <div className="text-center text-lg">
              Our membership management <br /> software provides full automation
              of <br /> membership renewals and <br /> payments
            </div>
          </div>
          <div className="bg-white flex flex-col items-center justify-center text-[#4D4D4D]">
            <img src={mid3} alt="" />
            <div className="text-3xl text-center font-semibold ">
              Clubs And <br /> Groups
            </div>
            <div className="text-center text-lg">
              Our membership management <br /> software provides full automation
              of <br /> membership renewals and payments
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[30rem] flex items-center justify-center text-[#4D4D4D] gap-12">
        <img src={model1} width={400} alt="" />
        <div className=" flex flex-col gap-4">
          <div className="text-4xl font-semibold">
            The unseen of spending three <br /> years at Pixelgrade
          </div>
          <div className="w-[45rem] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </div>
          <div className="text-white text-xl py-4 px-9 w-44 rounded-md bg-[#4CAF4F]">
            Learn more
          </div>
        </div>
      </div>
      <div className=" bg-[#3F5F7FA] h-[20rem]">.</div>
      <div className=" bg-white h-[30rem] flex items-center justify-center text-[#4D4D4D] gap-12">
        <img src={model2} width={400} alt="" />
        <div className=" flex flex-col gap-4">
          <div className="text-4xl font-semibold">
            How to design your site footer like <br /> we did
          </div>
          <div className="w-[45rem] text-lg">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </div>
          <div className="text-white text-xl py-4 px-9 w-44 rounded-md bg-[#4CAF4F]">
            Learn more
          </div>
        </div>
      </div>
      <div className=" h-[30rem] flex items-center justify-center text-[#4D4D4D] gap-12">
        <img src={model1} width={400} alt="" />
        <div className=" flex flex-col gap-4">
          <div className="text-lg">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </div>
          <div className="w-[45rem] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </div>
          <div className="text-white text-xl py-4 px-9 w-44 rounded-md bg-[#4CAF4F]">
            Learn more
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
