import "./style.scss";

export default function SkillsList() {

    const skills = [
        {
            category: "Programming/ Languages",
            items: [
                { imgFile: "html.png", name: "HTML 5", experiencePeriod: "2012 - present" },
                { imgFile: "css.png", name: "CSS 3", experiencePeriod: "2012 - present" },
                { imgFile: "gml.png", name: "Game Maker Language", experiencePeriod: "2014 - present" },
                { imgFile: "js.png", name: "JavaScript", experiencePeriod: "2018 - present" },
                { imgFile: "csharp.png", name: "C#", experiencePeriod: "2018 - 2019" },
                { imgFile: "sql.png", name: "SQL", experiencePeriod: "2019 - present" },
            ],
        },
        {
            category: "Code libraries/ Frameworks",
            items: [
                { imgFile: "react.png", name: "React JS", experiencePeriod: "2021 - present" },
                { imgFile: "ts.png", name: "TypeScript", experiencePeriod: "2021 - present" },
                { imgFile: "sass.png", name: "SASS", experiencePeriod: "2021 - present" },
                { imgFile: "next.png", name: "Next JS", experiencePeriod: "2023 - present" },
                { imgFile: "adonis.png", name: "Adonis JS", experiencePeriod: "2023 - present" },
            ],
        },
        {
            category: "Design",
            items: [
                { imgFile: "ps.png", name: "Adobe Photoshop", experiencePeriod: "2018 - present" },
                { imgFile: "figma.png", name: "Figma", experiencePeriod: "2019 - present" },
            ],
        },
    ];


    return (
        <div>
            {skills.map((skill, index) => (
                <div key={index}>
                    <h1 className="skillCategory">{skill.category}:</h1>
                    <div className="skillItems">
                        {skill.items.map((item, idx) => (
                            <div className="skillItem" key={idx}>
                                <img
                                    id="icon"
                                    src={`/assets/icons/skills/${item.imgFile}`}
                                    alt={item.name}
                                />
                                <div id="details">
                                    <p id="name">{item.name}</p>
                                    <p id="xp">{item.experiencePeriod}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
