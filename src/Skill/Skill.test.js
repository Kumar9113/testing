import { render,screen } from "@testing-library/react";
import Skill from "./Skill";

describe('Skills',()=>
{
    test('Skills',()=>
    {
       
        render(<Skill ></Skill>);
        const listElement=screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })
    test("render a list skills",()=>
    {
        render(<Skill></Skill>);
        const listElements=screen.getAllByRole('listitem');
        expect(listElements).toHaveLength(3);
    })
    test('render login button',()=>
    {
        render(<Skill></Skill>)
        const login=screen.getByRole("button",
        {name:"LogIn"}
        )
        expect(login).toBeInTheDocument();
    })
    test('render start leraing button',()=>
    {
        render(<Skill></Skill>)
        const start=screen.queryByRole("button",
        {name:"Start Learing"}
        )
        expect(start).not.toBeInTheDocument();
    })

    test('render start leraing button useeffet',async()=>
    {
        render(<Skill></Skill>)
        const start=await screen.findByRole("button",
        {name:"Start Learing"},{timeout:4000},
        )
        expect(start).toBeInTheDocument();
    })
})