import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule], // Import FormsModule for ngModel
      declarations: [ContactComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty form initially', () => {
    expect(component.contactData.name).toBe('');
    expect(component.contactData.email).toBe('');
    expect(component.contactData.phone).toBe('');
    expect(component.contactData.message).toBe('');
  });

  it('should update form values when user inputs data', () => {
    component.contactData.name = 'John Doe';
    component.contactData.email = 'johndoe@example.com';
    component.contactData.phone = '9876543210';
    component.contactData.message = 'Hello, I need assistance.';

    expect(component.contactData.name).toBe('John Doe');
    expect(component.contactData.email).toBe('johndoe@example.com');
    expect(component.contactData.phone).toBe('9876543210');
    expect(component.contactData.message).toBe('Hello, I need assistance.');
  });

  it('should not submit form if required fields are empty', () => {
    spyOn(window, 'alert');
    component.contactData.name = '';
    component.contactData.email = '';
    component.contactData.message = '';
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Please fill out all required fields.');
  });

  it('should reset form after successful submission', () => {
    spyOn(window, 'alert');
    component.contactData.name = 'John Doe';
    component.contactData.email = 'johndoe@example.com';
    component.contactData.message = 'Hello!';
    component.onSubmit();
    expect(component.contactData.name).toBe('');
    expect(component.contactData.email).toBe('');
    expect(component.contactData.phone).toBe('');
    expect(component.contactData.message).toBe('');
    expect(window.alert).toHaveBeenCalledWith('Thank you for reaching out! We will get back to you soon.');
  });
});
