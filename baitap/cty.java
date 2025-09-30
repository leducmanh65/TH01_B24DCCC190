public class cty {
    public class nhanvien {
        public String name;
        public int age;
        public long salary;

        public nhanvien(String name, int age, long salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
    }

    public class nvienVanphong extends nhanvien {
        private long ngaylam;
        private static long luongMoingay = 100;

        public nvienVanphong(String name, int age, long salary, long ngaylam) {
            super(name, age, salary);
            this.ngaylam = ngaylam;
        }

        public long luongVanphong() {
            return ngaylam * luongMoingay;
        }
    }

    public class nvienKythuat extends nhanvien {
        private long tiencong;
        private long time;

        public nvienKythuat(String name, int age, long salary, long tiencong, long time) {
            super(name, age, salary);
            this.tiencong = tiencong;
            this.time = time;
        }

        public long luongkythuat() {
            return tiencong * time;
        }
    }

    public static void main(String[] args) {
        cty outer = new cty();
        cty.nvienVanphong a = outer.new nvienVanphong("Mlong", 18, 0, 2);

        a.salary= a.luongVanphong();
        System.out.println("Lương nhân viên VP: " + a.salary);

        cty.nvienKythuat b= outer.new nvienKythuat("Hiep", 19, 0, 100, 3);
        b.salary= b.luongkythuat();
        System.out.println("Lương nhân viên KT: " + b.salary);
    }
}