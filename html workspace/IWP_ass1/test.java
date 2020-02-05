abstract class A {
    abstract void callme();
    void callmetoo() {
    System.out.println("Concrete method ");
    }
    }
class B extends A {
    void callme() {
    System.out.println("B's callme");
    }
    }
    class Main {
    public static void main(String args[]) {
    B b=new B();
    b.callme();
    b.callmetoo();
    }
    }