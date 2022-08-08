const data = [
  {
    key: 1,
    name: "Ravi Sehrawat",
    position: "President",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQFXcY9hQwFOOg/profile-displayphoto-shrink_400_400/0/1623295305976?e=1665014400&v=beta&t=mvufq4jxzDvXX9AeWjv-pT0Zb5r26yyQkdh_ecuNZJw"
  },
  {
    key: 2,
    name: "Harshit Joshi",
    position: "Vice President",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQFtl20zmkvYeg/profile-displayphoto-shrink_400_400/0/1592390475442?e=1665014400&v=beta&t=i0oeVFDAsQGMrPMKdNL8HvUZqjdihUZ4nwiADVKiWJo"
  },
  {
    key: 3,
    name: "Chandra Mauli",
    position: "Social Media Lead",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQEnkdq2iSmemQ/profile-displayphoto-shrink_400_400/0/1606628515171?e=1665014400&v=beta&t=PCgNsvfvVKNO4CDo_60bDUNDjJcJFeWBHs116NInrWU"
  },
  {
    key: 4,
    name: "Prashant Kumar",
    position: "Design & Technical Team",
    img: "https://avatars.githubusercontent.com/u/96608616?v=4"
  },
  {
    key: 5,
    name: "Aditya Rawat",
    position: "Event & Marketing Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHjAq-HVr-oPA/profile-displayphoto-shrink_400_400/0/1651491486062?e=1665014400&v=beta&t=uEBusUCGVjQ9r2qIEQHrk4p3DjR0Dxax5aNvIzCRS34"
  },
  {
    key: 6,
    name: "Prateek Yaduvanshi",
    position: "Video Editor",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQEFIP0UBMpA_A/profile-displayphoto-shrink_400_400/0/1641880243216?e=1665014400&v=beta&t=Rzc2lY6_Av2uHypPptINgoQRgDdtF930E2BphW7k0d4"
  },
  {
    key: 7,
    name: "Pratik Gupta",
    position: "Social Media Manager",
    img: "https://ik.imagekit.io/ecelliiitsonepat/CoreTeam__4__vjFXcxxdO.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659697407623"
  },
  {
    key: 8,
    name: "Shivansh Verma",
    position: "Technical Head",
    img: "https://ik.imagekit.io/ecelliiitsonepat/CoreTeam__1__NJ79qJBd9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659697406131"
  },
  {
    name: "Ayush Kumar",
    position: "Technical Team",
    img: "https://ik.imagekit.io/ecelliiitsonepat/CoreTeam__2__OPgeD0v86.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659697406706"
  },
  {
    key: 9,
    name: "Abhyuday",
    position: "Marketing Team",
    img: "https://ik.imagekit.io/ecelliiitsonepat/CoreTeam__5__1IbNym9Kl.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659697408033"
  },
  {
    key: 10,
    name: "Ansh Bhalla",
    position: "Quote Writer",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQH_8AcHtQxCtA/profile-displayphoto-shrink_400_400/0/1652600450249?e=1665014400&v=beta&t=si3LO_hgprPJ2UIpvT0pOefB9AVbXvTAuXnw5DVHGHg"
  },
  {
    key: 11,
    name: "Dipankar Yadav",
    position: "News Team",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQGoIByOfRHDng/profile-displayphoto-shrink_400_400/0/1632741855887?e=1665014400&v=beta&t=Wd2ZNCEiJDFW2nwx8qbjS0TdE_6NA9cw_FQ1sa72SnU"
  },
  {
    key: 12,
    name: "Pranjal",
    position: "Design Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQFiHB44lEbGpw/profile-displayphoto-shrink_400_400/0/1655819600843?e=1665014400&v=beta&t=6rau4AQqCOM_txQw4OQKqdTRrH2P3u3FcE-J46eVPMM"
  },
  {
    key: 13,
    name: "Siddhant",
    position: "Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHPj9Vbb7Kelg/profile-displayphoto-shrink_400_400/0/1641558467963?e=1665014400&v=beta&t=zR7IO3haC6Zg43DHuU-5EAQdCa35R03ZeE-ud67RtWM"
  },
  {
    key: 14,
    name: "Tamish Bajaj",
    position: "Marketing Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQEUvn3yT-zLOg/profile-displayphoto-shrink_400_400/0/1645377104796?e=1665014400&v=beta&t=DbM1ypFjp0QgcHepU_GsJD_V8L12zpsKeM7KqJEI8So"
  },
  {
    key: 15,
    name: "Vaishnav Jha",
    position: "Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQGOLMhNRyzyEg/profile-displayphoto-shrink_400_400/0/1651478978365?e=1665014400&v=beta&t=bL0iVvtPzaW_EuhHn6OB8WZxcm5ajgW1HsPj505-gm8"
  },
  {
    key: 16,
    name: "Naman Kumawat",
    position: "Design Lead",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQFhI8LA86s3Fg/profile-displayphoto-shrink_400_400/0/1622465234552?e=1665014400&v=beta&t=IV2fY0TkD8yf94hKLq8KQSkcsDCsDEK3wo1BpCnmb5U"
  },
  {
    key: 17,
    name: "Abhishek Sindhe",
    position: "Social Media Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHtaHLDYJhqFg/profile-displayphoto-shrink_400_400/0/1658556505050?e=1665014400&v=beta&t=OzcEtWldhuh-_DTrRuKvPFzmYydcbicie9yd9iQu53A"
  },
  {
    key: 18,
    name: "Vasu Bajaj",
    position: "Designer",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFKYwDOG5ReYA/profile-displayphoto-shrink_400_400/0/1659104169148?e=1665014400&v=beta&t=Yd8u_MRSzaEqKL7rBRw8KZyvUtdYBRj-QkLUh-NrmhA"
  },
  {
    key: 19,
    name: "Bhav Khushwaha",
    position: "Marketing and Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQHA5AEZiu-kQA/profile-displayphoto-shrink_400_400/0/1640772002107?e=1665014400&v=beta&t=elSxvDiIh7aaxhfuHcC_ckzpKuaqcsekG_6ATh_ueAk"
  },
  {
    key: 20,
    name: "Rishi Bachhuka",
    position: "PR Team",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFW5RmpgKYQVA/profile-displayphoto-shrink_400_400/0/1631274451893?e=1665014400&v=beta&t=g-1Aecc_F4GeCWesx-2stRCeEgk9dG1LMd0-2PtUGKA"
  },
  {
    key: 21,
    name: "Nil Mani",
    position: "PR & Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHO4UWD17eaQg/profile-displayphoto-shrink_400_400/0/1651843250723?e=1665014400&v=beta&t=q7TPlCoh0JSTQmENWUMwnXudYzfUpZuZRT4LhgVnes4"
  },
  {
    key: 22,
    name: "Aryan Gupta",
    position: "News Team",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQEcVkE679ZRoA/profile-displayphoto-shrink_400_400/0/1653045795542?e=1665014400&v=beta&t=LS_aEM0DSzGqeYBTLA3Uk_fx7JOilODeiagI0dQlJqg"
  },
  {
    key: 23,
    name: "Utsav Gupta",
    position: "Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQHwFLFp15OIaw/profile-displayphoto-shrink_400_400/0/1646657218797?e=1665014400&v=beta&t=V8CvCcY90X7o-Z3f62I2SR0qSIWdhoUfL-BKgNGAogo"
  },
  {
    key: 24,
    name: "Vaibhav Singh",
    position: "News Team",
    img: "https://pps.whatsapp.net/v/t61.24694-24/291501332_990646748224549_8843258466085480870_n.jpg?ccb=11-4&oh=01_AVze4iFdeblsu9X2RZFle8ynoziBOM4RCfVnMTShaTURYg&oe=62FE259C"
  },
  {
    key: 25,
    name: "Jatin Madaan",
    position: "PR & Event Team",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQH1yI94OcYzbw/profile-displayphoto-shrink_400_400/0/1651933795358?e=1665014400&v=beta&t=4WaLv2MKGgBJuvpssBn7dFeFx27FX7X_x6on59s_LSs"
  },
  {
    key: 26,
    name: "Vaibhav Dinkar",
    position: "Social Media Anyalist",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQGqNtBuWHY_6g/profile-displayphoto-shrink_400_400/0/1641874944403?e=1665014400&v=beta&t=RoBGlCohPjofcLKgZIwrK4r-uwxd-8fs24EZ1UPBzL8"
  },
];

export default data;
