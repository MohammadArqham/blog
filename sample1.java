 class parent{
    String name;
    int age;

    parent(String n,int a){
        this.name = n;
        this.age =a;
    }

    void display(){
        System.out.println("parent class");
        System.out.println("name:-"+name +" "+"age:-"+age);
    }

}
class child extends parent{

    child(){
        super("mohd",21);
    }
    
    void display2(){
         System.out.println("child class");
        System.out.println("name:-"+name +" "+"age:-"+age);
    }
}

 class sample1{
        public static void main(String[] var){
        
        child obj = new child();
        obj.display();
    }
    
}