"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useState, useEffect,useRef } from 'react';


export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <img src="/img/dyjc.png" alt="Logo" />
      </div>

      <div className={styles.grid}>
        <a
          href="/standardRecipe"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
          标准方剂 <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="/patient"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            患者 <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="/recipe"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            处方 <span>-&gt;</span>
          </h2>
          
        </a>

        
      </div>
    </main>
  );
}
