import link_icon from '../assets/link_icon.png';
import qrcode_image from '../assets/qrcode_image.png';

const Projects = () => {
   return (
      <div className='flex flex-col'>
         <h3 className='text-xl font-[500]'>我的項目 / My Projects</h3>

         <div className="h-full flex gap-6 mt-6">
            <MainProject />
            <div className='flex flex-col justify-between'>
               <SubProjects
                  title='URL Shortener'
                  description='in production'
                  image={'not yet'}
               />
               <SubProjects
                  title='QR Code Generator'
                  description='finished'
                  image={qrcode_image}
                  link='https://github.com/Nier704/qrcode-generator'
               />
            </div>
         </div>
      </div>
   )
}

const MainProject = () => {
   return (
      <div
         // COLOCAR COMO LINK PARA FUTURO PROJETO
         // href=""
         // target='_blank' 
         // rel='noopener noreferrer'
         style={{ transition: "all .5s" }}
         className="w-[370px] h-[380px] flex flex-col justify-between rounded-3xl border border-[#EBEBEB] p-6 hover:shadow-md"
      >
         <div className='flex flex-col gap-2'>
            <div
               style={{ boxShadow: '0 0 15px -10px gray' }}
               className='w-[40px] h-[40px] border-2 border-[#EBEBEB] rounded-lg flex justify-center items-center'
            >
               <img
                  className='w-[25px]'
                  src={link_icon}
                  alt="icon"
               />
            </div>

            <div>
               <h3 className='text-sm'>Movies Project</h3>
               <p className='text-sm opacity-[.5]'>in production</p>
            </div>
         </div>

         <div className='flex justify-center border-2 items-center py-16 rounded-xl'>
            <span className='text-blue-500'>Soon</span>
         </div>
      </div>
   )
}

interface SubProjectProps {
   title: string;
   description: string;
   image: string;
   link?: string;
}

const SubProjects: React.FC<SubProjectProps> = ({ title, description, image, link }) => {
   return (
      <a
         href={link}
         target='_blank' 
         rel='noopener noreferrer'
         style={{ transition: "all .5s" }}
         className="w-[370px] h-[170px] flex justify-between rounded-3xl border border-[#EBEBEB] p-6 hover:shadow-md"
      >
         <div className='w-1/2 flex flex-col gap-2'>
            <div
               style={{ boxShadow: '0 0 15px -10px gray' }}
               className='w-[40px] h-[40px] border-2 border-[#EBEBEB] rounded-lg flex justify-center items-center'
            >
               <img
                  className='w-[25px]'
                  src={link_icon}
                  alt="icon"
               />
            </div>

            <div>
               <h3 className='text-sm'>{title}</h3>
               <p className='text-sm opacity-[.5]'>{description}</p>
            </div>
         </div>

         <>
            {
               image === 'not yet' ? (
                  <div className='w-1/2 flex justify-center border items-center rounded-xl'>
                     <span className='text-blue-500'>Soon</span>
                  </div>
               ) : (
                  <img
                     src={image}
                     alt="project image"
                     className='w-1/2 rounded-xl border'
                  />
               )
            }
         </>
      </a>
   )
}

export default Projects