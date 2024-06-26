import React from "react";
import FilterHome from "./FilterHome";
import { AnswerFilters } from "@/constants/filters";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import { getTimestamp } from "@/lib/utils";
import ParseHTML from "./ParseHTML";
import Votes from "./Votes";
interface PropsAllAnswers {
  questionId: string;
  user: string;
  totalAnswers: number;
  page?: number;
  filter?: string;
}
const AllAnswers = async ({
  questionId,
  user,
  totalAnswers,
  page,
  filter,
}: PropsAllAnswers) => {
  const result = await getAnswers({ questionId });
  return (
    <div className="mt-11 ">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>
        <FilterHome filters={AnswerFilters} />
      </div>
      <div>
        {result!.answers.map((answer) => (
          <article key={answer._id} className="light-border border-b py-10">
            <div className="flex items-center justify-between ">
              <div className="mb-8 flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2 ">
                <Link
                  href={`/profile/${answer.author.clerkId}`}
                  className="flex items-center justify-start gap-1"
                >
                  <Image
                    src={answer.author.picture}
                    width={18}
                    height={18}
                    alt="profile"
                    className="rounded-full object-cover max-sm:mt-0.5"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <p className="body-semibold text-dark300_light700">
                      {answer.author.name}
                    </p>
                    <p className="small-regular text-light400_light500 ml-0.5 mt-0.5 line-clamp-1 ">
                      answered {getTimestamp(answer.createdAt)}
                    </p>
                  </div>
                </Link>
                <div className="flex justify-end">
                  <Votes
                    type="Answer"
                    itemId={JSON.stringify(answer.id)}
                    userId={JSON.stringify(user)}
                    upvotes={answer.upvotes.length}
                    hasupVoted={answer.upvotes.includes(user)}
                    downvotes={answer.downvotes.length}
                    hasdownVoted={answer.downvotes.includes(user)}
                  />
                </div>
              </div>
            </div>
            <ParseHTML data={answer.content} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllAnswers;
