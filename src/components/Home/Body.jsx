import React from 'react';
import classes from '../../styles/Header.module.css'


const Body = () => {
    return (
        <div>
            <header className={classes.hero}>
                    <div className={classes.content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque,
                            placeat in.
                        </p>
                        <button className={classes.cta}>Learn More</button>
                    </div>
                </header>
                <main className={classes.cta}>
                    <section>
                        <div className={classes.tabRow}>
                            <div className={classes.col12}>
                                <h2>Regular Section</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Dignissimos voluptatum repudiandae aliquam, sit quasi ipsa! Quidem
                                    dolorum, sit beatae laboriosam error cupiditate veniam commodi,
                                    animi, asperiores consequuntur laborum. Quod, deleniti.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className={classes.feature}>
                        <div className={classes.tabRow}>
                            <div className={classes.col12}>
                                <h2>Feature Section</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                    nihil dignissimos eos repellat perferendis qui corrupti explicabo
                                    vel inventore minima.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={classes.tabRow}>
                            <div className={classes.col4}>
                                <h2>Columns</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga porro
                                    sapiente, corporis dignissimos laudantium illo expedita corrupti
                                    asperiores esse quae.
                                </p>
                            </div>
                            <div className={classes.col4}>
                                <h2>Columns</h2>
                                <p>
                                    Repellat qui, dolores nemo asperiores incidunt quidem dolorum. Quos,
                                    deleniti neque architecto dolore magni aliquid. Inventore suscipit
                                    consequuntur excepturi ipsam.
                                </p>
                            </div>
                            <div className={classes.col4}>
                                <h2>Columns</h2>
                                <p>
                                    Doloribus perferendis a ipsum ad, consectetur animi aliquam maxime,
                                    earum aspernatur, ea commodi tempore suscipit explicabo cupiditate
                                    at nemo quae.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
        </div>
    );
}

export default Body;
