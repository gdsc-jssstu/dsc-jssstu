import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link";

export default function Team() {
  const headerRef = useRef(null);
  const logoLightRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <Layout page="team" headerRef={headerRef}>
      <Head>
        <title>{siteTitle} - Team</title>

        <link rel="stylesheet" href="css/team.css" />
      </Head>

      <div>
        <div className="main" id="home-scroll">
          <div className="main-text-holder" ref={headerRef}>
            <h1 data-aos="fade-up" className="barlow-extralight">
              The Team
            </h1>
            <h2 data-aos="fade-up" className="barlow-medium">
              Presenting board of 2020-2021
            </h2>
          </div>
          <Link href="#our-work">
            <div className="main-down-arrow" id="down-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.55 44.393"
              >
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-966 -967.48)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M982,967.98V1011.1"
                    transform="translate(-1.5)"
                    fill="none"
                    stroke="#141414"
                    strokeLinecap="round"
                    strokeWidth={1}
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M966.813,997.8l13.973,13.577L994.363,997.8"
                    transform="translate(-0.313)"
                    fill="none"
                    stroke="#141414"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                </g>
              </svg>
            </div>
          </Link>
          <img
            src="images/team.svg"
            className="main-image"
            alt="DSC VIT Team"
          />
        </div>
        <div
          className="container-main holded-container container-main-last"
          id="our-work"
        >
          <h1
            className="barlow-medium text-center"
            style={{ paddingBottom: "90px" }}
          >
            The Board
          </h1>
          <div className="icons" id="board">
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/angad.jpg"
                alt="Angad Sharma"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Angad Sharma</h3>
                <p className="text-center barlow-medium">Community Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/ubaid.jpg"
                alt="Ubaid Usmani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ubaid Usmani</h3>
                <p className="text-center barlow-medium">Technical Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/prateek.jpg"
                alt="Prateek Mewara"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Prateek Mewara</h3>
                <p className="text-center barlow-medium">Android Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/ekaansh.jpg"
                alt="Ekaansh Arora"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ekaansh Arora</h3>
                <p className="text-center barlow-medium">Design Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/meherdeep.jpg"
                alt="Meherdeep Thakur"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Meherdeep Thakur</h3>
                <p className="text-center barlow-medium">Management Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/sanchi.jpg"
                alt="Sanchi Chopra"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Sanchi Chopra</h3>
                <p className="text-center barlow-medium">WTM Lead</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/deepak.jpg"
                alt="Deepak Nahar"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Deepak Nahar</h3>
                <p className="text-center barlow-medium">
                  Digital Marketing &amp; Content Lead
                </p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/satkriti.jpg"
                alt="Satkriti Singh"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Satkriti Singh</h3>
                <p className="text-center barlow-medium">
                  Women Empowerment <br />
                  Lead
                </p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">

                        <img class="circle-icon" src="images/board19/apurva.jpg" alt="Apruva Nitanjay">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Apurva Nitanjay</h3>
                            <p class="text-center barlow-medium">Projects Lead</p>
                        </div>

                    </div>

                    <div class="circle-icon-holder">

                        <img class="circle-icon" src="images/board19/akshay.jpg" alt="Akshat Raghavan">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Akshay Raghavan</h3>
                            <p class="text-center barlow-medium">Operations Lead</p>
                        </div>

                    </div>

                    <div class="circle-icon-holder">

                        <img class="circle-icon" src="images/board19/preethi.jpg" alt="Preethi G">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Preethi G</h3>
                            <p class="text-center barlow-medium">PR Lead</p>
                        </div>

                    </div>

                    <div class="circle-icon-holder">

                        <img class="circle-icon" src="images/board19/amrut.jpg" alt="Amrut Phadke">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Amrut Phadke</h3>
                            <p class="text-center barlow-medium">Projects Lead</p>
                        </div>

                    </div> */}
          </div>
          <div id="board-expander">
            <div className="button-maker">
              <div className="barlow-thin button-text">Show All</div>
            </div>
          </div>
        </div>
        <div
          className="container-main holded-container container-main-last"
          id="our-work-scroll"
        >
          <h1
            className="barlow-medium text-center"
            style={{ paddingBottom: "90px" }}
          >
            Technical Team
          </h1>
          <div className="icons" id="technical">
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/techteam/yaswant.jpg" alt="Yaswant Narayan">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Yaswant Narayan</h3>
                            <p class="text-center barlow-medium">Android</p>
                        </div>

                    </div>

                    <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/techteam/paritosh.jpg" alt="Paritosh Mahajan">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Paritosh Mahajan</h3>
                            <p class="text-center barlow-medium">ML</p>
                        </div>

                    </div>

                    <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/techteam/vikrame.jpg" alt="Vikrame Vasudev">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Vikrame Vasudev</h3>
                            <p class="text-center barlow-medium">Web</p>
                        </div>

                    </div> */}
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/amogh.jpg"
                alt="Amogh Lele"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Amogh Lele</h3>
                <p className="text-center barlow-medium">Android</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/siddhartha.jpg"
                alt="Amogh Lele"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Siddhartha</h3>
                <p className="text-center barlow-medium">Android</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/fenil.jpg"
                alt="Amogh Lele"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Fenil Jain</h3>
                <p className="text-center barlow-medium">Android</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/ritik.jpg"
                alt="Amogh Lele"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Rithik Jain</h3>
                <p className="text-center barlow-medium">Android</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/techteam/nikhil.jpg" alt="Nikhil Singh">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Nikhil Singh</h3>
                            <p class="text-center barlow-medium">Web</p>
                        </div>

                    </div> */}
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/purushottam.jpg"
                alt="Purushottam Sharma"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Purushottam Sharma</h3>
                <p className="text-center barlow-medium">Web</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/ananya.jpg"
                alt="Ananya Ganesh"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ananya Ganesh</h3>
                <p className="text-center barlow-medium">Web</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/nirmit.jpeg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Nirmit Jatana</h3>
                <p className="text-center barlow-medium">Web</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/ashutosh.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ashutosh Kaushik</h3>
                <p className="text-center barlow-medium">Web</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/prakhar.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Prakhar Soni</h3>
                <p className="text-center barlow-medium">Web</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="" alt="Aviral">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Aviral</h3>
                            <p class="text-center barlow-medium">Web</p>
                        </div>

                    </div> */}
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/riddhi.jpg"
                alt="Riddhi Gupta"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Riddhi Gupta</h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/abhishek.jpg"
                alt="Abhishek Kushwaha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Abhishek Kushwaha</h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/kush.jpeg"
                alt="Abhishek Kushwaha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Kushal</h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/SaiSandeepRayanuthala.jpg"
                alt="Abhishek Kushwaha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">
                  Sai Sandeep Rayanuthala
                </h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/hishaam.jpg"
                alt="Abhishek Kushwaha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin"> Md Hishaam Akhtar</h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/PragatiBhattad.jpg"
                alt="Abhishek Kushwaha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Pragati Bhattad</h3>
                <p className="text-center barlow-medium">Backend</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/vishaal.jpg"
                alt="Vishaal Selvaraj"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Vishaal Selvaraj</h3>
                <p className="text-center barlow-medium">Algorithms</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/mayank.jpg"
                alt="Vishaal Selvaraj"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Mayank Kumar</h3>
                <p className="text-center barlow-medium">Algorithms</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/deepak.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Deepak Malpani</h3>
                <p className="text-center barlow-medium">ML</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/ShantanuVerma.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Shantanu Verma</h3>
                <p className="text-center barlow-medium">ML</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/chanakya.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Chanakya Kapoor</h3>
                <p className="text-center barlow-medium">ML</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/raman.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Raman</h3>
                <p className="text-center barlow-medium">ML</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/techteam/GovindKrishnan.jpg"
                alt="Deepak Malpani"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Govind Krishnan</h3>
                <p className="text-center barlow-medium">System Developer</p>
              </div>
            </div>
          </div>
          <div id="technical-expander">
            <div className="button-maker">
              <div className="barlow-thin button-text">Show All</div>
            </div>
          </div>
        </div>
        <div
          className="container-main holded-container container-main-last"
          id="our-work-scroll"
        >
          <h1
            className="barlow-medium text-center"
            style={{ paddingBottom: "90px" }}
          >
            Management Team
          </h1>
          <div className="icons" id="management">
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/hardik.jpg"
                alt="Hardik Kataria"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Hardik Kataria</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/dhruv.jpg"
                alt="Dhruv Mittal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Dhruv Mittal</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/vivek.jpg"
                alt="Vivek Shetty"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Vivek Shetty</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/akshat.jpg"
                alt="Akshat Gupta"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Akshat Gupta</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/shubham.jpg"
                alt="Shubham Srivastava"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Shubham Srivastava</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/muskan.jpg"
                alt="Muskan Rastogi"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Muskan Rastogi</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/kritika.jpg"
                alt="Kritika Sharma"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Kritika Sharma</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/naynika.jpg"
                alt="Naynika Wason"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Naynika Wason</h3>
                <p className="text-center barlow-medium">Content</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/managers/shreya.jpg" alt="Shreya Maheshwari">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Shreya Maheshwari</h3>
                            <p class="text-center barlow-medium">Content</p>
                        </div>

                    </div> */}
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/saloni.jpg"
                alt="Saloni Parekh"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Saloni Parekh</h3>
                <p className="text-center barlow-medium">Content</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/manorama.jpg"
                alt="Manorama Maharana"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Manorama Maharana</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/arjun.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Arjun Bhanot</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/ABDEALI.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">ABDEALI</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/AdityaMadan.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Aditya Madan</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/AnshulBamb.jpeg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Anshul Bamb</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/Arushi Jain.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Arushi Jain</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/Gurnehmat.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Gurnehmat Dhindsa</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/JanviPrasad.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Janvi Prasad</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/NeilKavalakkat.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Neil Kavalakkat</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/PranavRaaghav.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Pranav Raaghav</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/RohitMenon.jpeg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Rohit Menon</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/SHIVANSHTIWARI.jpeg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Shivansh Tiwari</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/Shresth.jpg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Shresth Tiwary</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/managers/srinjay.jpeg" alt="Arjun Bhanot">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Srinjay Saha</h3>
                            <p class="text-center barlow-medium">Manager</p>
                        </div>

                    </div> */}
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/managers/Yuvraj.jpeg"
                alt="Arjun Bhanot"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Yuvraj</h3>
                <p className="text-center barlow-medium">Manager</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/managers/cyril.jpg" alt="Cyril Peter">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Cyril Peter</h3>
                            <p class="text-center barlow-medium">Manager</p>
                        </div>

                    </div> */}
          </div>
          <div id="management-expander">
            <div className="button-maker">
              <div className="barlow-thin button-text">Show All</div>
            </div>
          </div>
        </div>
        <div className="container-main holded-container" id="our-work-scroll">
          <h1
            className="barlow-medium text-center"
            style={{ paddingBottom: "90px" }}
          >
            Design Team
          </h1>
          <div className="icons" id="design">
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/riya.jpg"
                alt="Riya Kanabar"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Riya Kanabar</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/ruchica.jpg"
                alt="Ruchica Sinha"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ruchica Sinha</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/aditya.jpg"
                alt="Aditya Rathore"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Aditya Rathore</h3>
                <p className="text-center barlow-medium">3D &amp; Motion</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/shravani.jpg"
                alt="Shravani Shete"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Shravani Shete</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/ronish.jpg"
                alt="Ronish Sawal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ronish Sawal</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/ishi.jpg"
                alt="Ronish Sawal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Ishi Yadav</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/swayam.jpg"
                alt="Ronish Sawal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Swayam S. Sharma</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/ChiyaBorkar.jpg"
                alt="Ronish Sawal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Chiya Borkar</h3>
                <p className="text-center barlow-medium">Graphic</p>
              </div>
            </div>
            <div className="circle-icon-holder">
              <img
                className="circle-icon"
                src="images/designers/thanmay.jpg"
                alt="Ronish Sawal"
              />
              <div className="circle-icon-caption">
                <h3 className="text-center barlow-thin">Thanmay V.</h3>
                <p className="text-center barlow-medium">3D &amp; Motion</p>
              </div>
            </div>
            {/* <div class="circle-icon-holder">
                        
                        <img class="circle-icon" src="images/designers/ronish.jpg" alt="Ronish Sawal">
                        <div class="circle-icon-caption">
                            <h3 class="text-center barlow-thin">Ronish Sawal</h3>
                            <p class="text-center barlow-medium">Graphic</p>
                        </div>

                    </div> */}
          </div>
          <div id="design-expander">
            <div className="button-maker">
              <div className="barlow-thin button-text">Show All</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
