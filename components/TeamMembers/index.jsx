import styles from "../../styles/TeamMembers.module.scss";
import member1Pic from "../../media/member1.jpg";
import member2Pic from "../../media/member2.jpg";
import member3Pic from "../../media/member3.jpg";
import member4Pic from "../../media/member4.jpg";
import member5Pic from "../../media/member5.jpg";
import member6Pic from "../../media/member6.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
const TeamMembers = () => {
  const cardsContainerVarient = {
    hidden: {},
    show: {},
  };
  const cardsVarient = {
    hidden: {},
    show: {},
  };
  class Member {
    constructor(picture, name, age, job) {
      this.picture = picture;
      this.name = name;
      this.age = age;
      this.job = job;
    }
  }
  const member1 = new Member(
    member1Pic,
    "Tameem Awwad",
    "17 yrs old",
    "Team leader"
  );
  const member2 = new Member(
    member4Pic,
    "Qusai Al-Shannag",
    "17 yrs old",
    "Graphics Designer"
  );
  const member3 = new Member(
    member2Pic,
    "Malek Abu-Humeidan",
    "12 yrs old",
    "project managment and graphics"
  );
  const member4 = new Member(
    member3Pic,
    "Issa Seitan",
    "14 yrs old",
    "Marketing"
  );
  const member5 = new Member(
    member5Pic,
    "Abdullah haymoor",
    "14 yrs old",
    "social media"
  );
  const member6 = new Member(
    member6Pic,
    "Rayyan hamdan",
    "12 yrs old",
    "Manufacturing manger"
  );
  const members = [member1, member2, member3, member4, member5, member6];
  return (
    <div className={styles.TeamMembersContainer}>
      <h2>Team Members:</h2>
      <motion.section
        className={styles.cardsContainer}
        variants={cardsContainerVarient}
        animate="show"
        initial="hidden"
      >
        {members.map((member, index) => (
          <motion.div
            className={styles.card}
            variants={cardsVarient}
            key={index}
          >
            <Image src={member.picture} alt="" />
            <h3>{member.name}</h3>
            <span>{member.age}</span>
            <span>{member.job}</span>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};
export default TeamMembers;
