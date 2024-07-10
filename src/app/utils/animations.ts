import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  console.log("animatePageIn");
  //DOM 요소 선택
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  const banners = [bannerOne, bannerTwo, bannerThree, bannerFour];

  if (banners.every((banner) => banner !== null)) {
    const tl = gsap.timeline();
    //gsap 타임라인 생성.
    //애니메이션을 순차적으로 실행할 수 있게 해줌.

    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.2, //0.2초 간격으로 애니메이션 실행
    });
  } else {
    console.log("Banners not found");
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  console.log("animatePageOut");

  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  const banners = [bannerOne, bannerTwo, bannerThree, bannerFour];

  if (banners.every((banner) => banner !== null)) {
    const tl = gsap.timeline();
    //gsap 타임라인 생성.
    //애니메이션을 순차적으로 실행할 수 있게 해줌.

    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.2, //0.2초 간격으로 애니메이션 실행
      onComplete: () => {
        router.push(href);
      },
    });
  } else {
    console.log("animatePageOut Banners not found");
  }
};
