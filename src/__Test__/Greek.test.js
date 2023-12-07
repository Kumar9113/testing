import { render,screen } from "@testing-library/react";
import Greek from "../componets/greeet/Greek";


describe('Greek',()=>
{


it("Grekk render correctly",()=>
{
    render(<Greek></Greek>);
    const textElement=screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
})
})


describe('Nested',()=>
{
    it('Greek render with a name',()=>
{
    render(<Greek name='kumar'></Greek>);
    const textElement=screen.getByText(/Hello kumar/i);
    expect(textElement).toBeInTheDocument();

})

})

