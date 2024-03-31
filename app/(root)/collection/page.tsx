// import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import FilterHome from "@/components/shared/FilterHome";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filters";
// import { getSaveQuestions } from "@/lib/actions/user.action";
// import { AnyARecord } from "dns";
// import { auth } from "@clerk/nextjs";
// import { title } from "process";

export default async function Home() {
  // const { userId } = auth();
  const userId = "123456";
  if (!userId) return null;
  // const result = await getSaveQuestions({
  //   clerkId: userId,
  // });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <FilterHome
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {/* {result.questions.length > 0 ? (
          result.questions.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : ( */}
        <NoResult
          title="  There is no question saved to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
            discussion. our query could be the next big thing others learn from. Get
            involved! 💡"
          link="/ask-question"
          linkTitle="ask a Question"
        />
        {/* )} */}
      </div>
    </>
  );
}
