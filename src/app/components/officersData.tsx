import { StaticImageData } from 'next/image';
import RasLogoBigPic from '../../../public/images/ras_logo_big.png';

// Import images statically
import AnnieVuPic from '../../../public/images/leaders/Annie-Vu.jpg';
import CarolynHoangPic from '../../../public/images/leaders/Carolyn-Hoang.jpg';
import ColinTanPic from '../../../public/images/leaders/Colin-Tan.jpg';
import DhruvBansalPic from '../../../public/images/leaders/Dhruv-Bansal.jpg';
import DhruvNistalaPic from '../../../public/images/leaders/Dhruv-Nistala.jpg';
import DylanZuPic from '../../../public/images/leaders/Dylan-Zu.jpg';
import EvanLaiPic from '../../../public/images/leaders/Evan-Lai.jpg';
import GraceLiPic from '../../../public/images/leaders/Grace-Li.jpg';
import GustavoVillalobosPic from '../../../public/images/leaders/Gustavo-Villalobos.jpg';
import HasifShaikhPic from '../../../public/images/leaders/Hasif-Shaikh.jpg';
import JakeTomczesynPic from '../../../public/images/leaders/Jake-Tomczesyn.jpg';
import JeffreyChangPic from '../../../public/images/leaders/Jeffrey-Chang.jpg';
import JiwooParkPic from '../../../public/images/leaders/Jiwoo-Park.jpg';
import KarmanyaahMalhotraPic from '../../../public/images/leaders/Karmanyaah-Malhotra.jpg';
import LakshayGuptaPic from '../../../public/images/leaders/Lakshay-Gupta.jpg';
import RafaelTorresPic from '../../../public/images/leaders/Rafael-Torres.jpg';
import RichardBaiPic from '../../../public/images/leaders/Richard-Bai.jpg';
import ShreeyaGarapatyPic from '../../../public/images/leaders/Shreeya-Garapaty.jpg';
import TobyNguyenPic from '../../../public/images/leaders/Toby-Nguyen.jpg';
import TylerHomPic from '../../../public/images/leaders/Tyler-Hom.jpg';
import WillRegerPic from '../../../public/images/leaders/Will-Reger.jpg';
import YilinJinPic from '../../../public/images/leaders/Yilin-Jin.jpg';
import ZaaraBilalPic from '../../../public/images/leaders/Zaara-Bilal.jpg';

interface officers {
    name: string;
    title: string;
    email: string;
    profileLink: string;
    discord?: string;
    picture: StaticImageData;
}

interface leaders {
    name: string;
    profileLink: string;
    picture: StaticImageData;
}

export const officers: officers[] = [
    { 
      name: 'Shreeya Garapaty', title: 'President', email: 'shreeya.garapaty@utexas.edu',
      profileLink: '', picture: ShreeyaGarapatyPic },
    {
      name: 'Carolyn Hoang', title: 'Vice President', email: 'carolyn.hoang@utexas.edu',
      profileLink: '', picture: CarolynHoangPic },
    { 
      name: 'Zaara Bilal', title: 'Secretary', email: 'zbilal@utexas.edu',
      profileLink: '', picture: ZaaraBilalPic },
    {
      name: 'Andrew Senyszyn', title: 'Treasurer', email: 'Andrewsenyszyn@utexas.edu',
      profileLink: '', picture: RasLogoBigPic },
    {
      name: 'Colin Tan', title: 'Treasurer', email: 'colinyqt@utexas.edu',
      profileLink: '', picture: ColinTanPic },
    {
      name: 'Toby Nguyen', title: 'Fundraising Coordinator', email: 'tan942@utexas.edu',
      profileLink: '', picture: TobyNguyenPic },
    {
      name: 'Grace Li', title: 'Corporate Relations', email: 'gracewl@utexas.edu',
      profileLink: '', picture: GraceLiPic },
    {
      name: 'Dhruv Bansal', title: 'Outreach Coordinator', email: 'dhruvbansal@utexas.edu',
      profileLink: '', picture: DhruvBansalPic },
    {
      name: 'Gustavo Villalobos', title: 'Special Events Coordinator', email: 'gvp05@utexas.edu',
      profileLink: '', picture: GustavoVillalobosPic },
    {
      name: 'Annie Vu', title: 'Publicity Coordinator', email: 'Annie.2005@utexas.edu',
      profileLink: '', picture: AnnieVuPic },
    {
      name: 'Richard Bai', title: 'Publicity Coordinator', email: 'Richard.Bai.1@utexas.edu',
      profileLink: '', picture: RichardBaiPic },
    {
      name: 'Karmanyaah Malhotra', title: 'Webmaster', email: 'karmalhotra@utexas.edu',
      profileLink: '', picture: KarmanyaahMalhotraPic },
];

export const teamleads: officers[] = [
    {
      name: 'Jake Tomczesyn', title: 'Demobots Committee Head', email: 'jake.tomczeszyn@utexas.edu',
      profileLink: '', discord: '4jakers18', picture: JakeTomczesynPic },
    {
      name: 'Dhruv Nistala', title: 'IGVC Committee Head', email: 'dhruv.nistala@utexas.edu',
      profileLink: '', discord: 'awesomeguytheepic', picture: DhruvNistalaPic },
    {
      name: 'Tyler Hom', title: 'Robomaster Committee Head', email: '',
      profileLink: '', discord: 'thehominator', picture: TylerHomPic },
    {
      name: 'Jeffrey Chang', title: 'Robotathon Committee Head', email: '',
      profileLink: '', discord: 'ohoftoryoy', picture: JeffreyChangPic },
    {
      name: 'Hasif Shaikh', title: 'VexU Committee Head', email: '',
      profileLink: '', discord: 'has02', picture: HasifShaikhPic },
    {
      name: 'Toby Nguyen', title: 'Fundraising', email: 'tan942@utexas.edu',
      profileLink: '', discord: 'tguyen', picture: TobyNguyenPic },
    {
      name: 'Grace Li', title: 'Corporate', email: 'gracewl@utexas.edu',
      profileLink: '', discord: 'watchycat', picture: GraceLiPic },
];

export const leaders: leaders[] = [
    { name: "Yilin Jin", profileLink: 'https://www.linkedin.com/in/yilin-jin-20b986248/', picture: YilinJinPic },
    { name: "Jiwoo Park", profileLink: 'https://www.linkedin.com/in/jiwoooop/', picture: JiwooParkPic },
    { name: "Lakshay Gupta", profileLink: 'https://www.linkedin.com/in/lakshay-gupta-168620246/', picture: LakshayGuptaPic },
    { name: "Wenyu Zhu", profileLink: 'https://www.linkedin.com/in/wenyugzhu/', picture: RasLogoBigPic },
    { name: "Will Reger", profileLink: 'https://www.linkedin.com/in/will-reger-6760831a1/', picture: WillRegerPic },
    { name: "Arnav Surjan", profileLink: 'https://www.linkedin.com/in/arnav-surjan/', picture: RasLogoBigPic },
    { name: "Caleb Chalmers", profileLink: 'https://www.linkedin.com/in/calebchalmers/', picture: RasLogoBigPic },
    { name: "Dylan Zu", profileLink: 'https://www.linkedin.com/in/dylan-zu-7807231bb/', picture: DylanZuPic },
    { name: "Olyvia Witham", profileLink: 'https://www.linkedin.com/in/olyvia-witham-74418628b/', picture: RasLogoBigPic },
    { name: "Tanay Garg", profileLink: 'https://www.linkedin.com/in/tanay-garg/', picture: RasLogoBigPic},
    { name: "Evan Lai", profileLink: 'https://www.linkedin.com/in/laievan/', picture: EvanLaiPic },
    { name: "Morris Lin", profileLink: 'https://www.linkedin.com/in/morris-lin-yuan/', picture: RasLogoBigPic },
    { name: "Brianna Dickson", profileLink: '', picture: RasLogoBigPic },
    { name: "Joseph Romero", profileLink: '', picture: RasLogoBigPic },
    { name: "Arthur Zhang", profileLink: '', picture: RasLogoBigPic },
    { name: "Theodore Hubbard", profileLink: '', picture: RasLogoBigPic },
    { name: "Runtian Du", profileLink: '', picture: RasLogoBigPic },
    { name: "Linh Tran", profileLink: '', picture: RasLogoBigPic },
    { name: "Ashlynn Tusneem", profileLink: '', picture: RasLogoBigPic },
    { name: "Devika Nambisan", profileLink: '', picture: RasLogoBigPic },
    { name: "Sricharan Hari", profileLink: '', picture: RasLogoBigPic },
    { name: "Tanya Nikam", profileLink: '', picture: RasLogoBigPic },
    { name: "Marcela Cerrato", profileLink: '', picture: RasLogoBigPic },
    { name: "Junhan (Johnny) Shen", profileLink: '', picture: RasLogoBigPic },
    { name: "Barrett Lubianski", profileLink: '', picture: RasLogoBigPic },
    { name: "Christopher Arellano", profileLink: '', picture: RasLogoBigPic },
    { name: "Natalie Best", profileLink: '', picture: RasLogoBigPic },
    { name: "Sicheng (Terry) Tan", profileLink: '', picture: RasLogoBigPic },
    { name: "Rafael Torres", profileLink: '', picture: RafaelTorresPic },
];