import React from 'react';
import { motion } from 'framer-motion'

const Resources = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Start slightly below the view
    animate={{ opacity: 1, y: 0 }} // Animate to its original position
    exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
    transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
    >
      <h1 className="text-center font-bold text-2xl mb-5 p-5">Resources</h1>
      
      <p className="text-center text-md mb-5 px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus incidunt maxime dicta impedit sapiente voluptatem, accusamus quibusdam dolorem suscipit similique eligendi praesentium amet alias cum. Aliquid fugiat impedit placeat accusamus error necessitatibus, dolorem sint expedita ducimus! Ipsa praesentium minima totam assumenda impedit quos itaque. Fuga nam iste cum magnam id ab veritatis? Quas dolore exercitationem, id cum porro, nihil voluptatibus, magni corporis non ut neque laboriosam nostrum sint. Iste nam quis eum dolorum quos natus nisi quaerat repellat fugit officia! Autem dolor recusandae maiores architecto, expedita minus inventore dolorum commodi voluptates consequatur delectus aliquam mollitia ut, eligendi ipsam praesentium neque voluptas doloribus! Commodi iusto, molestiae repellendus, pariatur illo error sequi dolore minus non deleniti eius quae ad tempora corporis facere id dolores eos labore exercitationem accusamus deserunt. Minima nemo alias quibusdam explicabo minus. Consequuntur perspiciatis maiores optio iste blanditiis quasi sint similique possimus veniam repellat ipsam labore, quibusdam animi pariatur debitis deleniti corrupti! Aspernatur corporis aperiam illo autem officiis architecto incidunt quo possimus quidem ad id, reiciendis nihil expedita optio laboriosam impedit esse deleniti corrupti aliquid. Dicta, repellendus soluta? Quo mollitia dolorem, sed natus vel eveniet, voluptatibus consequuntur dolores quia veritatis obcaecati doloremque numquam maiores autem rem impedit quis.</p>
    </motion.div>
  );
}

export default Resources;
