import Application from "./Application";
import {  render,screen } from "@testing-library/react";

describe("Application",()=>
{
    test('render correctly',()=>
    {
        render(<Application></Application>);

        const pageHeading=screen.getByRole('heading',{
            name:"Job application Form",
        });
        expect(pageHeading).toBeInTheDocument();



        const sectionHeading=screen.getByRole('heading',{
            name:"Section",
        });
        expect(sectionHeading).toBeInTheDocument();




        const nameElement=screen.getByRole('textbox',{
            name:"Name",
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2=screen.getByLabelText("Name",{
            selector:"input",
        })
        expect(nameElement2).toBeInTheDocument();

        const nameElement3=screen.getByPlaceholderText('full name')
        expect(nameElement3).toBeInTheDocument();

        const nameElement4=screen.getByText('Name');
        expect(nameElement4).toBeInTheDocument();

        const nameElement5=screen.getByDisplayValue('Ku');
        expect(nameElement5).toBeInTheDocument();

        const image=screen.getByAltText('imag');
        expect(image).toBeInTheDocument();

        const title=screen.getByTitle('close');
        expect(title).toBeInTheDocument();


        // const id=screen.getByTestId('section');
        // expect(id).toBeInTheDocument();
       
      //queryAllByRole;  hiden like click button
      //findBYrole after some time and set timeout:2000

      //screen.debug

      //import { logRoles } from "@testing-library/react";
//in test create a view=render(<compound>) ;logRoles(view.conatiner)



        const BioElement=screen.getByRole('textbox',{
            name:"Bio",
        });
        expect(BioElement).toBeInTheDocument();



        const jobLocation=screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();


        const termsElemnt=screen.getByRole('checkbox');
        expect(termsElemnt).toBeInTheDocument();

        const termsElemnt1=screen.getByLabelText("i agree to the terms and conditions")
        expect(termsElemnt1).toBeInTheDocument();


        const SubmitButton=screen.getByRole('button');
        expect(SubmitButton).toBeInTheDocument();
    })
    
})