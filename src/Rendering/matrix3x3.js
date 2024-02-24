class matrix3xs3 {
// a d g
// b e h
// c f i
    constructor(a,b,c,d,e,f,g,h,i) {
        this.setTransform(a,b,c,d,e,f,g,h,i);
    }

    setTransform(a,b,c,d,e,f,g,h,i) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
    }
    transform(a,b,c,d,e,f,g,h,i) {
        this.a += a;
        this.b += b;
        this.c += c;
        this.d += d;
        this.e += e;
        this.f += f;
        this.g += g;
        this.h += h;
        this.i += i;
    }

    translate(g, h) {
        this.g += g;
        this.h += h;
    }
    setTranslate(g, h) {
        this.g = g;
        this.h = h;
    }

    scale(a, e) {
        this.a += a;
        this.e += e;
    }
    setScale(a, e) {
        this.a = a;
        this.e = e;
    }
}