import { render,screen } from "@testing-library/react";
import Greek from "./Greek";


describe('Greek',()=>
{


test("Grekk render correctly",()=>
{
    render(<Greek></Greek>);
    const textElement=screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
})
})


describe('Nested',()=>
{
    test('Greek render with a name',()=>
{
    render(<Greek name='kumar'></Greek>);
    const textElement=screen.getByText(/Hello kumar/i);
    expect(textElement).toBeInTheDocument();

})

})

