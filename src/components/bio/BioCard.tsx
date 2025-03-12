// import { BookOpen } from 'lucide-react';

export function BioCard() {
  return (
    <div className="space-y-4">
      <p className="text-secondary leading-relaxed text-lg">
        I'm Towhid (he/him), a fresh graduate from the <a href="https://cse.buet.ac.bd/">Department of CSE, BUET</a>. I am currently working as a software engineer at Therap BD Ltd., a US-based company, 
        and previously worked as a machine learning engineer at AIEdgeInside.
        <br/><br/>
        <a href="https://drive.google.com/file/d/15F8HXNFatHYtv_3mXzWnAKS58jDBpYPy/view?usp=sharing" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold px-3 py-2 rounded-lg shadow-md backdrop-blur-md transition duration-300">
        📄 My CV
      </a>
        <br/><br/>  
        My research interests lie in the fields of <strong>System, Security, Edge Computing as well as Machine learning, and also the intersection of these fields. </strong> 
         My current career goal is to pursue a PhD program in my field of interest.
        <br/><br/>
        Currently, I’m working with <a href="https://sites.google.com/site/abdullahadnan/home?authuser=0" target="_blank">Prof. Muhammad Abdullah Adnan</a> on Bangla sign language production. I have also worked with <a href="https://sites.google.com/site/tanzimahashem/" target="_blank">Prof. Tanzima Hashem</a> on Non-Invasive Dehydration Detection 
        using deep-learning models on smartphone. This led to a first-authored paper currently under review on UbiComp/IMWUT 2024.
        <br/><br/>
        My undergraduate thesis project was under <a href="https://sites.google.com/site/rezwanareazrimpi/" target="_blank">Dr. Rezwana Reaz</a> on optimizing IoT firewall deployment on a fog-cloud-based architecture. Our paper (first-authored) 
        accepted at 2024 IEEE/ACM 17th International Conference on Utility and Cloud Computing (UCC)
      </p>
    </div>
  );
}