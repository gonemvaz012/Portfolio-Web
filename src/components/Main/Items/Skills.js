import React from 'react'

const Skills = () => {
    
    return (
        <div className='skills'>
            <div className='skills__title-ctr'>
                <h2 className='skills__title-ctr__h2'>SKILLS</h2>
            </div>
            <div className='skills__border'>
                <div className='skills__items'>
                    <div className='skills__items__ctn'>
                        <p className='skills__items__p'>Java</p>
                    </div>
                    <div className='skills__items__bar skills__items__bar--40'></div>
                    <p className='skills__items__porcent'>0%</p>
                </div>
                <div className='skills__items'>
                    <div className='skills__items__ctn'>
                        <p className='skills__items__p'>HTML</p>
                    </div>
                    <div className='skills__items__bar skills__items__bar--60'></div>
                    <p className='skills__items__porcent'>0%</p>
                </div>
                <div className='skills__items'>
                    <div className='skills__items__ctn'>
                        <p className='skills__items__p'>CSS</p>
                    </div>
                    <div className='skills__items__bar skills__items__bar--60'></div>
                    <p className='skills__items__porcent'>0%</p>
                </div>
                <div className='skills__items'>
                    <div className='skills__items__ctn'>
                        <p className='skills__items__p'>JavaScript</p>
                    </div>
                    <div className='skills__items__bar skills__items__bar--40'></div>
                    <p className='skills__items__porcent'>0%</p>
                </div>
                <div className='skills__items'>
                    <div className='skills__items__ctn'>
                        <p className='skills__items__p'>React.js</p>
                    </div>
                    <div className='skills__items__bar skills__items__bar--30'></div>
                    <p className='skills__items__porcent'>0%</p>
                </div>
            </div>

        </div>
    )
}

export default Skills
